from fastapi import APIRouter
from app.utils.ai_recommendation import get_recommendations

recommendation_router = APIRouter()

@recommendation_router.get("/")
async def get_recommendations_route():
    return get_recommendations()
