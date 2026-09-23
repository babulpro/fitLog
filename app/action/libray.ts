export const gerLibray=async()=>{
    let res = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return res.json()
}