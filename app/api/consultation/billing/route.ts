import {NextResponse} from "next/server";
import {getBillingInfoData} from "@/lib/billing";

export async function GET(request) {
    // const query = request.nextUrl.searchParams.get('query')
    /*todo: 쿼리를 통해 검색 구현 */
    const data = await getBillingInfoData();
    return NextResponse.json(
        data
    )
}
