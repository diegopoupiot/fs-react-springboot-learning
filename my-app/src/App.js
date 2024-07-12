import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
        <div>
          <div>
            Your Todo's
          </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th scope={'col'}>#</th>
                            <th scope={'col'}>Description</th>
                            <th scope={'col'}>Assigned</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope={'row'}>1</th>
                            <td>Do the dishes</td>
                            <td>John</td>
                        </tr>
                        <tr>
                            <th scope={'row'}>2</th>
                            <td>Walk the dog</td>
                            <td>John</td>
                        </tr>
                        <tr>
                            <th scope={'row'}>3</th>
                            <td>Wash the car</td>
                            <td>John</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
  );
}

export default App;
