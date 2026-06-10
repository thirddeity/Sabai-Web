import type { ComponentType } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';

export interface RouterProps {
  router: {
    location: ReturnType<typeof useLocation>;
    navigate: ReturnType<typeof useNavigate>;
    params: ReturnType<typeof useParams>;
  };
}

export function withRouter<TProps extends RouterProps>(
  WrappedComponent: ComponentType<TProps>,
) {
  return function WithRouter(props: Omit<TProps, keyof RouterProps>) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <WrappedComponent
        {...(props as TProps)}
        router={{ location, navigate, params }}
      />
    );
  };
}
