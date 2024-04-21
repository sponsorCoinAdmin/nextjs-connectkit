import React from 'react';
import Image from 'next/image';
import cog_png from '../../../public/resources/images/miscellaneous/cog.png';
import styles from '@/app/styles/Exchange.module.css';

const FeeDisclosure = () => {
    return (
        <div id="agentRateFee" className={styles["agentRateFee"]}>
            Fee Disclosures
            <Image src={cog_png} className={styles["feeInfoCog"]} width={18} height={18} alt="Info Image" 
            onClick={() => alert("Fees Explained")}/>
        </div>
    );
}

export default FeeDisclosure;
