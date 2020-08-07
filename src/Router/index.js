import React, { lazy,Suspense  } from "react";
import {HashRouter ,
    Switch,
    Route,
    Link} from "react-router-dom"
// import {Loading} from "../conponents/Loading"
const CustomerManagement = lazy(() =>
    import(
        '../Views/CustomerManagement'
        )
)
const Login = lazy(() =>
    import(
        '../Views/Login/'
        )
)
const Table = lazy(() =>
    import(
        '../Components/Table/'
        )
)
const Title = lazy(() =>
    import(
        '../Views/Title/'
        )
)

const routes = [
    {
        path: "/Login",
        component: Login
    },
    {
        path: "/",
        component: TitleRouter,
        routes: [
            {
                path: "/CustomerManagement",
                component: CustomerManagement
            }

        ]
    }
];

export default function RouteConfigExample() {
    return (
        <HashRouter>


                    <Switch>

                            {routes.map((route, i) => (
                                <RouteWithSubRoutes key={i} {...route} />
                            ))}

                    </Switch>


        </HashRouter>
    );
}


function RouteWithSubRoutes(route) {
    return (
        <Suspense fallback={555}>
            <Route
                path={route.path}
                render={props => (

                    <route.component {...props} routes={route.routes} />
                )}
            />
        </Suspense>
    );
}


function TitleRouter({ routes }) {
    return (
        <div>
            <Title>
                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                    <Link to='/CustomerManagement'>客戶列表</Link>
                </Switch>

            </Title>

        </div>
    );
}

