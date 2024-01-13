import { useSession } from "next-auth/react";
import Image from "next/image";
import '@/styles/userprofile.scss';

export default function UserProfile() {
    const { data: session } = useSession();
    return (
        <div className="container-fluid mt-lg-4 h-auto w-75 bg-black">
            <div className="row gap-5">
                <div className="col-1 card p-3 w-25">
                    <div className="card-body">
                        <center>
                            <Image alt="Users Icon" className="mi rounded-circle img-thumbnail" src={session?.user?.image} width={60} height={60} />
                            <div className="bar"></div>
                            <div className="card-title">
                                Name: <span>{session?.user?.name}</span>
                            </div>
                            <div className="card-title">
                                Email: <span>{session?.user?.email}</span>
                            </div>
                        </center>
                    </div>
                </div>
                <div className="col card w-auto">
                    <div className="card-body">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
