import * as PropTypes from 'prop-types';

UserLayout.propTypes = {
  children: PropTypes.node,
};

function UserLayout({ children }) {
  return (
    <div style={{ 'padding': '25px' }}>
      {children}
    </div>
  );
}

export default UserLayout;
