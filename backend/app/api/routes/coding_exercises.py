from fastapi import APIRouter
from app.utils.code_evaluator import evaluate_code

coding_exercise_router = APIRouter()

@coding_exercise_router.post("/evaluate")
async def evaluate(code: str):
    result = evaluate_code(code)
    return {"result": result}
