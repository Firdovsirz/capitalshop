import React, { useState } from 'react';
import "../LanguageChange/LanguageChange.css";
import { useTranslation } from 'react-i18next';
import EnFlag from "../../assets/Language/english-flag.png";
import RuFlag from "../../assets/Language/russian-flag.png";
import AzFlag from "../../assets/Language/azerbaijani-flag.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function LanguageChange() {
    const [currentLang, setCurrentLang] = useState('English');
    const [currentFlag, setCurrentFlag] = useState(EnFlag);
    const [isDropdown, setIsDropdown] = useState(false);
    const handleLangChange = (e) => {
        setCurrentLang(e);
        if (e === 'English') {
            setCurrentFlag(EnFlag);
            i18n.changeLanguage('en');
        } else if (e === 'Русский язык') {
            setCurrentFlag(RuFlag);
            i18n.changeLanguage('ru');
        } else if (e === 'Azərbaycan dili') {
            setCurrentFlag(AzFlag);
            i18n.changeLanguage('az');
        }
    }
    const availableLang = [
        currentLang === 'English' ? null : 'English',
        currentLang === 'Русский язык' ? null : 'Русский язык',
        currentLang === 'Azərbaycan dili' ? null : 'Azərbaycan dili'
    ];
    const availableFlag = [
        currentLang === 'English' ? null : EnFlag,
        currentLang === 'Русский язык' ? null : RuFlag,
        currentLang === 'Azərbaycan dili' ? null : AzFlag
    ];
    const toggleDropdown = () => {
        setIsDropdown((prev) => !prev);
    }
    const { t, i18n } = useTranslation();
    return (
        <div className='lang-change-container'>
            <div className='current-lang' onClick={toggleDropdown}>
                <div className='current-lang-info'>
                    <img src={currentFlag} alt="flag" style={{ width: "30px" }} />
                    <p>{currentLang}</p>
                </div>
                <ArrowDropDownIcon className='current-lang-arrow' />
            </div>
            {isDropdown ? <div className='lang-list' onClick={toggleDropdown}>
                {availableLang.map((item, index) => {
                    if (item !== null) {
                        return (
                            <div className='aval-lang' onClick={() => handleLangChange(item)}>
                                <img src={availableFlag[index]} alt="flag" />
                                <p>{item}</p>
                            </div>
                        )
                    }
                    return null;
                })}
            </div> : null}
        </div>
    )
}
