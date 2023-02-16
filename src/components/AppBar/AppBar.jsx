import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
  return (
    <header>
      <div>
        <UserMenu />
        <AuthNav />
      </div>
    </header>
  );
};
