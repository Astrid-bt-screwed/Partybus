from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from pymongo import MongoClient
from datetime import datetime, timezone
import os
from dotenv import load_dotenv
import uuid

load_dotenv()

app = FastAPI(title="PARTYBOSS API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
MONGO_URL = os.environ.get("MONGO_URL")
DB_NAME = os.environ.get("DB_NAME", "partyboss")
client = MongoClient(MONGO_URL)
db = client[DB_NAME]

# Collections
contact_requests = db["contact_requests"]

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    phone: str
    event_type: str
    person_count: int
    date: str
    city: str
    message: str

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "service": "PARTYBOSS API"}

@app.post("/api/contact")
async def submit_contact(request: ContactRequest):
    try:
        contact_data = {
            "request_id": str(uuid.uuid4()),
            "name": request.name,
            "email": request.email,
            "phone": request.phone,
            "event_type": request.event_type,
            "person_count": request.person_count,
            "date": request.date,
            "city": request.city,
            "message": request.message,
            "created_at": datetime.now(timezone.utc).isoformat()
        }
        contact_requests.insert_one(contact_data)
        return {
            "status": "success",
            "message": "Anfrage erfolgreich gesendet!",
            "request_id": contact_data["request_id"]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/contact-requests")
async def get_contact_requests():
    requests = list(contact_requests.find({}, {"_id": 0}))
    return {"requests": requests}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
