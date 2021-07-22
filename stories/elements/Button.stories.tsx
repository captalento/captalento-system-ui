import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

import { Button } from '../../src';

export default { title: 'Elements/Button' };

export function Default() {
  return (
    <div className="grid gap-y-4">
      <Button>Entrar</Button>
      <Button variant="purple">Entrar</Button>
      <Button variant="green">Entrar</Button>
      <Button variant="red">Entrar</Button>
      <Button variant="orange">Entrar</Button>
      <div className="p-4 bg-white-100">
        <Button variant="black">Entrar</Button>
      </div>
      <Button variant="white">Entrar</Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div className="grid gap-y-4">
      <Button disabled>Aguarde...</Button>
      <Button disabled variant="purple">
        Aguarde...
      </Button>
      <Button disabled variant="green">
        Aguarde...
      </Button>
      <Button disabled variant="red">
        Aguarde...
      </Button>
      <Button disabled variant="orange">
        Aguarde...
      </Button>
      <Button disabled variant="black">
        Aguarde...
      </Button>
      <Button disabled variant="white">
        Aguarde...
      </Button>
    </div>
  );
}

export function Outlineds() {
  return (
    <div className="grid gap-y-4">
      <Button outlined>Outlined</Button>
      <Button outlined variant="purple">
        Outlined
      </Button>
      <Button outlined variant="green">
        Outlined
      </Button>
      <Button outlined variant="red">
        Outlined
      </Button>
      <Button outlined variant="orange">
        Outlined
      </Button>
      <div className="p-8 bg-white-100">
        <Button outlined variant="black">
          Outlined
        </Button>
      </div>
      <Button outlined variant="white">
        Outlined
      </Button>
    </div>
  );
}

export function WithIcon() {
  return <Button icon={RiArrowRightLine}>Logar</Button>;
}

export function OtherSize() {
  return <Button size="small">Logar</Button>;
}

// WithIcon.storyName = 'with icon';

export const EffectDisabled = () => {
  const [actived, setActived] = React.useState<boolean>(true);
  setTimeout(() => {
    setActived(!actived);
  }, 2000);

  return <Button disabled={actived}>{!actived ? 'logar' : 'Disabled'}</Button>;
};

EffectDisabled.storyName = 'Effect disabled';
