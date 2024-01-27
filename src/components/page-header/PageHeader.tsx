import React from 'react';
import './PageHeaderStyles.scss';
import { IconType } from 'react-icons';

type PageHeaderProps = {
    title: string;
    icon: IconType
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, icon: Icon }) => {
    return (
        <>
            <div className='white-space'></div>
            <div className='page-header'>
                <Icon size={16} />
                <p>{title}</p>
            </div>
        </>

    );
};

export default PageHeader;