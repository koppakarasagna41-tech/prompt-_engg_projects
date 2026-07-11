from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


@app.get("/")
def home():
    return {
        "message": "AI Customer Support API is running"
    }


@app.post("/chat")
def chat(request: ChatRequest):
    message = request.message.lower()

    if "refund" in message:
        response = "Refunds are normally processed within 5-7 business days."

    elif "order" in message:
        response = "I can help you track your order. Please provide your Order ID."

    elif "payment" in message:
        response = "I can help with your payment issue. Was the amount deducted?"

    else:
        response = "Thank you for contacting AI Customer Support. How can I help you?"

    return {
        "response": response
    }