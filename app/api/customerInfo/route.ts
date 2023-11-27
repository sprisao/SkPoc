import {NextResponse} from "next/server";
import {getCustomerInfoData} from "@/lib/customerInfo";

export async function GET(request) {
    // const query = request.nextUrl.searchParams.get('query')
    /*todo: 쿼리를 통해 검색 구현 */
    const data = await getCustomerInfoData();
    return NextResponse.json(
        data
    )
}
