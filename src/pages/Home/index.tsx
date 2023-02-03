import logo from 'assets/images/Logo.svg';
import { Button } from 'components/Button';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'phosphor-react';

export const Home = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-background px-8 ">
            <div className="mb-14 flex flex-col items-center justify-center gap-14 lg:mb-0 lg:gap-4">
                <h1 className="text-3xl font-bold text-violet-200">Listinha</h1>
                <img
                    className=""
                    src={logo}
                    alt=""
                />
                <NavLink
                    to="/list"
                    className="w-full flex items-center justify-center border-none text-center bg-violet-500 text-violet-200 rounded-lg py-3 duration-150 hover:bg-violet-600"
                >
                    <Button
                        text="Iniciar"
                        icon={<ArrowRight />}
                    />
                </NavLink>
                <h3 className="text-xs text-violet-200 font-light">
                    Made with 💜 by <strong>Rory</strong>
                </h3>
            </div>
        </div>
    );
};
