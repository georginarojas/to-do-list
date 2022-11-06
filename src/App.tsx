import { AddNewTask, Header, TaskList } from "./components";

function App() {
  return (
    <div className="w-screen min-h-screen bg-gray-600 flex flex-col items-center">
      <Header />
      <section className="-mt-[1.69rem] w-[46rem] box-border">
        <AddNewTask />
        <section className="mt-16 mb-12">
          <TaskList />
        </section>
      </section>
    </div>
  );
}

export default App;
