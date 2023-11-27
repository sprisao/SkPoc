import {NextResponse} from "next/server";
import {getHistoryData} from "@/lib/history";

export async function GET(request) {
    // const query = request.nextUrl.searchParams.get('query')
    /*todo: 쿼리를 통해 검색 구현 */
    const data = await getHistoryData();
    return NextResponse.json(
        data
    )
}
