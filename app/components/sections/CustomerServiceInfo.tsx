import {CustomerServiceInfoTable} from "@/app/components/tables/CustomerServiceInfo/table";
import {columns} from "@/app/components/tables/CustomerServiceInfo/columns";

{/*고객상담 정보*/
}
const CustomerServiceInfo = ({data}) => {
    return (
        <div className="bg-blue-100 mt-4">
            <div>
                <p>고객상담 정보</p>
            </div>

            {/*고객상담 정보 아이템*/}
            <div className="flex flex-row bg-blue-500 justify-between">
                <CustomerServiceInfoTable columns={columns} data={data}/>
            </div>
        </div>
    );
}

export default CustomerServiceInfo;