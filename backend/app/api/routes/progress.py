from fastapi import APIRouter

progress_router = APIRouter()

@progress_router.get("/")
async def get_progress():
    # Placeholder data for progress tracking
    return {"exercisesCompleted": 5, "accuracy": 80}
