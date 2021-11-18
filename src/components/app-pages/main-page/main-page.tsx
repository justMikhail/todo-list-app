import TodoBoard from '../../todo-board/todo-board';
import Footer from '../../footer/footer';
import './main-page.scss';

function MainPage(): JSX.Element {

  return (
    <div className="page page--main">
      <div className="page__main">
        <main className="main">
          MainPage
          <TodoBoard />
        </main>
      </div>
      <div className="page__footer">
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
