import {CustomerServiceInfoTable} from "@/app/[lng]/components/tables/CustomerServiceInfo/CustomerServiceInfoTable";
import {columns_customerServiceInfo} from "@/app/[lng]/components/tables/CustomerServiceInfo/columns_customerServiceInfo";
import SectionTitle from "@/app/[lng]/components/ui/SectionTitle";

{/*고객상담 정보*/
}
const CustomerServiceInfo = ({data}) => {
    return (
        <div className="w-full border rounded-sm overflow-clip m-1 ">

            <SectionTitle title="고객상담 정보"/>

            {/*고객상담 정보 아이템*/}
            <div className="flex flex-row justify-between">
                <CustomerServiceInfoTable columns={columns_customerServiceInfo} data={data}/>
            </div>
        </div>
    );
}

export default CustomerServiceInfo;