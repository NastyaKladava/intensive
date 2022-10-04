export function validateTaskInput(value:string) : boolean {
    if (value.trim().length > 160) {
        return false;
    }
    else {
        return true;
    }

} 