import { NextResponse } from 'next/server'
export async function POST(resquest: Request) {
    const data = await resquest.json()
    console.log(data)
    const resp = await fetch(`${process.env.BACKEND_URL}/verify-otp`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache',
        body: JSON.stringify({
            mobNo: data,
        }),
    })
    console.log(resp)

    const apiResponse = await resp.json()
    console.log(apiResponse)

    if (apiResponse.status === 'FAILURE') {
        console.log('enter')
        return NextResponse.json({ Error: 'Invalid OTP' })
    }
    console.log(apiResponse)
    if (!resp.ok) {
        throw new Error('unable to make a request')
    }
    return NextResponse.json({ apiResponse })
}
