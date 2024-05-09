import { createContext, useContext } from "react";
import PropTypes from "prop-types";

export const TabContext = createContext({});

const Tab = ({ children, currentTab, onChange }) => {
  return (
    <div>
      <TabContext.Provider value={{ currentTab, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
};

Tab.HeadsContainer = ({ children }) => {
  return <div className="flex justify-around">{children}</div>;
};

Tab.Item = ({ children, label, index }) => {
  const { currentTab, onChange } = useContext(TabContext);

  return (
    <div
      onClick={() => {
        onChange(index);
      }}
      key={index}
      className={`${currentTab === index ? "bg-green-500" : ""}`}
    >
      {label}
    </div>
  );
};

Tab.ContentContainer = ({ children }) => {
  return <div>{children}</div>;
};

Tab.ContentItem = ({ children, index }) => {
  const { currentTab } = useContext(TabContext);
  return (
    currentTab === index && (
      <div className={`text-xl font-bold `}>{children}</div>
    )
  );
};

Tab.Item.propTypes = {
  children: PropTypes.node, // Validate children prop
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
// Set displayName for the Tab component
Tab.displayName = "Tab";
Tab.Item.displayName = "Tab.Item";
Tab.HeadsContainer.displayName = "Tab.HeadsContainer";
Tab.ContentContainer.displayName = "Tab.ContentContainer";
Tab.ContentItem.displayName = "Tab.ContentItem";

Tab.Item.propTypes = {
  children: PropTypes.node, // Validate children prop
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
Tab.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
  currentTab: PropTypes.any.isRequired, // Add PropTypes for other props if needed
  onChange: PropTypes.func.isRequired,
};
Tab.HeadsContainer.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};

Tab.ContentContainer.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};
Tab.ContentItem.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
  index: PropTypes.number.isRequired,
};

export default Tab;
