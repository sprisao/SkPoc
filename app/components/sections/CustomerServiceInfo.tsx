import {CustomerServiceInfoTable} from "@/app/components/tables/CustomerServiceInfo/table";
import {columns} from "@/app/components/tables/CustomerServiceInfo/columns";
import SectionTitle from "@/app/components/ui/SectionTitle";

{/*고객상담 정보*/
}
const CustomerServiceInfo = ({data}) => {
    return (
        <div className="w-full border rounded-sm overflow-clip m-1 ">

            <SectionTitle title="고객상담 정보"/>

            {/*고객상담 정보 아이템*/}
            <div className="flex flex-row bg-blue-500 justify-between">
                <CustomerServiceInfoTable columns={columns} data={data}/>
            </div>
        </div>
    );
}

export default CustomerServiceInfo;