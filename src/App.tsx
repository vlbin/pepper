import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import Input from './components/input/Input';
import { InputTypes } from './components/input/Input';
import Checkbox from './components/checkbox/Checkbox';
import Badge from './components/badge/Badge';
import { Appearance } from './components/types';
import Banner from './components/banner/Banner';
import Pepper from './components/Pepper';
import Icon from './components/icon/Icon';
import Dropdown from './components/dropdown/Dropdown';
function App() {
  const pepper = Pepper.createInstance({
    theme: 'default',
  });

  return (
    <div className="App">
      <div className="section">
        <h1>Buttons</h1>
        <Button fullWidth={true} icon="add">
          Hello
        </Button>
        <Button fullWidth={false} icon="add" disabled>
          Hello
        </Button>
        <Button variant="secondary" icon="delete">
          hello
        </Button>
        <Button variant="secondary">
          <Badge text="1030" appearance={Appearance.Warning} />
          yeet
        </Button>
      </div>
      <div className="section">
        <h1>Inputs</h1>
        <Input name="testing" placeholder="wow" type={InputTypes.Date} />
        <Input
          name="testing"
          placeholder="wow"
          type={InputTypes.Text}
          disabled
        />
        <Input name="testing" placeholder="wow" type={InputTypes.Text} />
        <Checkbox labelText="hello" />
      </div>
      <Banner
        appearance={Appearance.Warning}
        icon={<Icon name="check" />}
        title="Success!"
        description="Your request went through."
      />
      <Dropdown
        options={[
          {
            value: 1,
            description: 'hello',
          },
          {
            value: 2,
            description: 'yeet',
          },
        ]}
      />
    </div>
  );
}

export default App;
