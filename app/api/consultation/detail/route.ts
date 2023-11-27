import {NextResponse} from "next/server";
import {getConsultationDetailData} from "@/lib/detail";

export async function GET(request) {
    // const query = request.nextUrl.searchParams.get('query')
    /*todo: 쿼리를 통해 검색 구현 */
    const data = await getConsultationDetailData();
    return NextResponse.json(
        data
    )
}
