export default function CommonTabs({
                                       activeTab, setActiveTab = (tab: string) => {
    }
                                   }: { activeTab: string, setActiveTab: (tab: string) => void }) {

    return (
        <div>
            <div className="flex space-x-4 ">
                <button className={`p-2 ${activeTab === 'tab1' ? 'text-blue-500' : ''}`}
                        onClick={() => setActiveTab('tab1')}>고객상담이력
                </button>
                <button className={`p-2 ${activeTab === 'tab2' ? 'text-blue-500' : ''}`}
                        onClick={() => setActiveTab('tab2')}>미납상담이력
                </button>
                <button className={`p-2 ${activeTab === 'tab3' ? 'text-blue-500' : ''}`}
                        onClick={() => setActiveTab('tab3')}>SMS전송이력
                </button>
            </div>
        </div>
    );
}