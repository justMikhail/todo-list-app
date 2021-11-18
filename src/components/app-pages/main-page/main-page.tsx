import TodoBoard from '../../todo-board/todo-board';
import Footer from '../../footer/footer';
import './main-page.scss';

function MainPage(): JSX.Element {

  return (
    <>
      <main className="main">
        MainPage
        <TodoBoard />
      </main>
      <Footer />
    </>
  );
}

export default MainPage;
