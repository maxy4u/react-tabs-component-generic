import React, {
  memo,
  useState,
  useCallback,
  createContext,
  useContext
} from 'react';

const TabsContext = createContext();
export function useTabContext() {
  return useContext(TabsContext) || {};
}

//--------------------------
// Local Components
//--------------------------
const TabContent = memo(() => {
  const { tabs, activeTab } = useTabContext();
  return <main>{tabs[activeTab].content}</main>;
});

const Tab = memo(({ title, ind }) => {
  const { activeTab, setActiveTab } = useTabContext();
  const onTabClick = useCallback(() => setActiveTab(ind), [ind]);
  return (
    <>
      <button
        className={`${(activeTab === ind && 'active') || 'inactive'}  tabs`}
        onClick={onTabClick}
      >
        {title}
      </button>
    </>
  );
});

//--------------------------
// Main Component
//--------------------------
const Tabs = memo(({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabsContext.Provider value={{ tabs, activeTab, setActiveTab }}>
      <section>
        <header>
          {tabs.map((tab, ind) => (
            <Tab key={`tab-${ind}`} {...tab} {...{ ind }} />
          ))}
        </header>

        <TabContent />
      </section>
    </TabsContext.Provider>
  );
});

export default Tabs;
