import NavBarMenu from './components/NavBarMenu';
import Introduction from './components/Introduction';
import Services from './components/Services/Services';
import DynamicForm from './components/DynamicForm/DynamicForm';

function App() {
  return (
    <div>
      <NavBarMenu />
      <Introduction />
      <Services />
      <DynamicForm />
    </div>
  );
}

export default App;
