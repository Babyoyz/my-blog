import { NextResponse } from "next/server";

const URL = "https://jsonplaceholder.typicode.com/todos/"

export const GET = async () =>{

    const response = await fetch(URL)

    const blog :Blog[] = await response.json()

    return NextResponse.json(blog)
}

export const POST = async () =>{

    
}
