export const gerLibray=async()=>{
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog')
    return response.json()
}


export const singleLibrayById=async(id:number)=>{
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    return response.json()

}