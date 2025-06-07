const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return ( 
        <div className="flex items-center justify-center pt-40">
            {children}
        </div>
     );
}
 
export default AuthLayout;