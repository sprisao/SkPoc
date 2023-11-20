/*청구정보*/
import SectionTitle from "@/app/components/ui/SectionTitle";
import {columns} from "@/app/components/tables/BillingInfo/columns_billingInfo";
import {BillingInfoTable} from "@/app/components/tables/BillingInfo/BillingInfoTable";

const BillingInformation = ({data}) => {
    return (
        <div>
            <SectionTitle title="청구정보"/>
            <BillingInfoTable columns={columns} data={data}>

            </BillingInfoTable>
        </div>
    );
}

export default BillingInformation