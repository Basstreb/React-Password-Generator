import Checkboxes from "./components/Checkboxes";
import useChangeTheme from "./hooks/useChangeTheme"

function App() {
  const { changeTheme, setChangeTheme } = useChangeTheme();

  return (
    <div className="bg-white dark:bg-black flex h-screen flex-col text-center">
      <div className="mr-auto ml-auto flex flex-col" style={{ width: '800px' }}>
        <button className="ml-auto h-10 px-6 mt-3 font-semibold rounded-md bg-black dark:bg-white text-white dark:text-black" type="submit" onClick={() => setChangeTheme(!changeTheme)}>
          {changeTheme ? "Light Mode" : "Dark Mode"}
        </button>
        <h1 className="text-4xl font-bold dark:text-white text-center p-5">
          Password Generator JS
        </h1>
        <p className="dark:text-white">
          Choose which characters you want to appear in the password:
        </p>

        <Checkboxes />
      </div>
    </div>
  )
}

export default App
