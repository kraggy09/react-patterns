// import ProtectedDisplayComponent from "./components/HOC/DisplayComponent";
// import Input from "./components/RenderProps/Input";
import { useState } from "react";
import Tab from "./components/Compound Pattern/TabContext";

const App = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const handleChage = (newIndex) => {
    setCurrentTab(newIndex);
  };
  return (
    <div className=" flex  min-h-[100vh] items-center justify-center">
      {/* Sending in the props from here which can also be recieved in the HOC */}
      {/* <ProtectedDisplayComponent newOne={"I am the newOne"} /> */}
      {/* Render Props */}
      {/* <Input
        renderTextBelow={(value) => {
          return <p>The value is {value}</p>;
        }}
      /> */}

      <Tab onChange={handleChage} currentTab={currentTab}>
        <Tab.HeadsContainer>
          <Tab.Item label={1} index={1} />
          <Tab.Item label={2} index={2} />
          <Tab.Item label={3} index={3} />
        </Tab.HeadsContainer>
        <Tab.ContentContainer>
          <Tab.ContentItem index={1}>
            <h1>I am container 1</h1>
          </Tab.ContentItem>
          <Tab.ContentItem index={2}>
            <h1>I am container 2</h1>
          </Tab.ContentItem>
          <Tab.ContentItem index={3}>
            <h1>I am container 3</h1>
          </Tab.ContentItem>
        </Tab.ContentContainer>
      </Tab>
    </div>
  );
};

export default App;
