import {NextResponse} from "next/server";
import searchCustomerService from "@/components/sections/Search";
import {getServiceAccountSearchData} from "@/lib/account";

/* api/searchUser*/
export async function GET(request) {
    // const query = request.nextUrl.searchParams.get('query')
    /*todo: 쿼리를 통해 검색 구현 */
    const data = await getServiceAccountSearchData();
    return NextResponse.json(
        data
    )
}