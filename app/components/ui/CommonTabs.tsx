export default function CommonTabs({
                                       activeTab, setActiveTab = (tab: string) => {
    }
                                   }: { activeTab: string, setActiveTab: (tab: string) => void }) {

    return (
        <div className="flex h-full text-sm items-end mx-0.5 ">
            <button
                className={`px-5 py-1 ${activeTab === 'tab1' ? 'text-blue-500 bg-blue-200 rounded-t-md  border-blue-200 ' : ''}`}
                onClick={() => setActiveTab('tab1')}>고객상담이력
            </button>
            <button className={`px-5 py-1 ${activeTab === 'tab2' ? 'text-blue-500 bg-blue-200 rounded-t-md  border-blue-200 ' : ''}`}
                    onClick={() => setActiveTab('tab2')}>미납상담이력
            </button>
            <button className={`px-5 py-1 ${activeTab === 'tab3' ? 'text-blue-500 bg-blue-200 rounded-t-md  border-blue-200 ' : ''}`}
                    onClick={() => setActiveTab('tab3')}>SMS전송이력
            </button>
        </div>
    );
}