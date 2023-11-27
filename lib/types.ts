export type ServiceAccountSearchData = {
    serviceNumber: string;        // 서비스번호, VARCHAR2(20)
    customerCorporateNumber: number; // 고객법인번호, NUMBER(20)
    sexCode: string;              // 성별코드, VARCHAR2(4)
    customerAccountNumber: number; // 고객계정번호, NUMBER(10)
    customerName: string;         // 고객명, VARCHAR2(80)
    billingAccountNumber: number; // 청구계정번호, NUMBER(10)
    billingCustomerName: string;  // 청구고객명, VARCHAR2(80)
    serviceAccountNumber: number; // 서비스계정번호, NUMBER(10)
    serviceSubscriptionDate: string; // 서비스가입일자, VARCHAR2(8)
};


export type CustomerServiceInfoData = {
    serviceAccountNumber: number // 서비스계정번호, NUMBER(10)
    serviceName: string // 서비스명, VARCHAR2(80)
    serviceNumber: string // 서비스번호, VARCHAR2(20)
    serviceStatusName: string // 서비스상태명, VARCHAR2(20)
    feeName: string // 요금제명, VARCHAR2(80)
    equipmentName: string // 단말기명, VARCHAR2(80)
    businessNumber: string // 사업자번호, VARCHAR2(20)
    businessName: string // 사업자명, VARCHAR2(80)
}

export type CustomerConsultationDetailData = {
    serviceNumber: string;       // 서비스번호
    affiliatedCompanyName: string;  // 소속법인명
    welfareDiscount: string;        // 복지할인
    serviceSubscriptionDate: string; // 서비스가입일
    serviceTerminationDate: string;  // 서비스해지일
    feeDetailName: string;          // 요금제상세
    serviceStatusName: string;      // 서비스상태명
    serviceSubscriptionClass: string; // 서비스구분
    usageType: string;              // 이용종류
    simType1: string;               // SIM유형1
    simType2: string;               // SIM유형2
    simType3: string;               // SIM유형3
    simType4: string;               // SIM유형4
    manufacturer: string;           // 제조사
    operatingSystem: string;        // OS
    deviceNickname1: string;        // 단말기애칭1
    deviceNickname2: string;        // 단말기애칭2
    serviceSequence: string;        // 일련
    serviceUsageDate: string;       // 사용일
    minorClassification: string;    // 미성년자
    method1: string;                // 방식1
    method2: string;                // 방식2
    legalRepresentative: string;    // 법정대리인
    numberPortability1: string;     // 번호이동1
    numberPortability2: string;     // 번호이동2
    unpaidMonths: number;           // 미납월수
    unpaidAmount: number;           // 미납금액
    currentMonthCharge: string;     // 당월청구
    postBillingAmount: string;      // 후청구금액
    billingIssueType: string;       // 청구서발행유형
    billingEmail: string;           // 이메일
    billingAddress1: string;        // 청구주소1
    billingAddress2: string;        // 청구주소2
    billingAddress3: string;        // 청구주소3
    taxInvoiceIssue: string;        // 새금계산서발행
    paymentMethod1: string;         // 납부방법1
    paymentMethod2: string;         // 납부방법2
    paymentMethod3: string;         // 납부방법3
    bankOrCardCompany: string;      // 은행/카드사
    bankOrCardNumber: string;       // 카드/계좌번호
};


export type PaymentInformationData = {
    /*청구서 발행유형, 청구주소, 세금계산서발행유무, 납부방법, 은행/카드사, 카드/계좌번호*/
    billType: string; // 청구서 발행유형
    billAddress: string; // 청구주소
    taxBill: boolean; // 세금계산서발행유무
    paymentMethod: string; // 납부방법
    bank: string; // 은행/카드사
    cardNumber: string; // 카드/계좌번호
};

export type CustomerServiceHistoryData = {
    consultationSerialNumber: number;  // 상담일련번호, NUMBER(10)
    serviceNumber: string; // 서비스번호
    consultationDate: string; // 상담일자
    consultationTime: string; // 상담시각
    serviceConsultationNumber: string; // 통화번호
    consultationType: string; // 상담유형
    notes: string; // 메모
    processingStatus: string; // 처리상태
    consultantName: string; // 상담원
    contactType: string; // 접촉구분
};

export type BillingInfoData = {
    invoiceDate: string; // 청구일자
    invoiceAmount: string; // 청구금액(절사)
    collectionBalanceAmount: string; // 미납잔액
    serviceNumber: string; // 서비스번호
}
