import React from 'react';
import { footer } from "./footer.constants"
import Link from 'next/link';

export default function Footer() {
    return (
        <footer>
            {/* Main Footer */}
            <div className='flex gap-8 ' >
                <div className="flex flex-col gap-3">
                    <h3>{footer?.brand?.name}</h3>
                    <div>{footer?.brand?.tagline}</div>
                    <div className="flex items-center gap-4">{footer?.brand?.socialLinks?.map(item => <span>{item?.name}</span>)}</div>
                </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-80">
                    {footer?.sections?.map(item=><div className="flex flex-col gap-3">
                        <h3>{item?.title}</h3>
                        {item?.links?.map(sectionItems=><Link href={sectionItems?.path}>{sectionItems?.label}</Link>)}
                    </div>)}
                </div>
            </div>
            </div>
            {/* Bottom Footer */}
            <div className="flex flex-col items-center">
                <div>{footer?.bottomBar?.copyright}</div>
                <div>{footer?.bottomBar?.links?.map((item,index)=><><Link href={item?.path}>{item?.label}</Link>{footer?.bottomBar?.links?.length-1 !== index && <> | </>}</>)}</div>
            </div>
        </footer>
    );
}


