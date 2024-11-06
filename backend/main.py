from fastapi import FastAPI
from app.api.routes.coding_exercises import coding_exercise_router
from app.api.routes.recommendations import recommendation_router
from app.api.routes.progress import progress_router

app = FastAPI()

app.include_router(coding_exercise_router, prefix="/api/coding_exercises")
app.include_router(recommendation_router, prefix="/api/recommendations")
app.include_router(progress_router, prefix="/api/progress")
