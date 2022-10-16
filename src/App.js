import "./App.css";
import Card from "./compenents/card/Card";
import CardLayout from "./compenents/card__layout/CardLayout";
import Title from "./compenents/title/Title";
import { users } from "./utils/data/data";

function App() {
  return (
    <div className="App">
      <Title/>
      <CardLayout>
        {users.map((item) => (
          <Card
            key={item.id}
            san={item.id}
            name={item.username}
            bgcolor={item.wallpaper}
            userInfo={item.userInfo}
            profilePic={item.profilePic}
            social={item.social}
          ></Card>
        ))}
      </CardLayout>
    </div>
  );
}

export default App;
