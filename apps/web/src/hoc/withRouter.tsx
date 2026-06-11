import type { ComponentType } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

export interface WithRouterProps {
  router: {
    location: ReturnType<typeof useLocation>;
    navigate: ReturnType<typeof useNavigate>;
    params: ReturnType<typeof useParams>;
  };
}

export function withRouter<TProps extends WithRouterProps>(
  WrappedComponent: ComponentType<TProps>,
) {
  return function WithRouter(props: Omit<TProps, keyof WithRouterProps>) {
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
