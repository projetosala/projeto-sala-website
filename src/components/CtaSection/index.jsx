import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { ArrowRight, ExternalLink } from 'react-feather';
import SectionHeader from '../SectionHeader';
import PrimaryButton from '../buttons/PrimaryButton';
import styles from './styles.module.css';

export default function CtaSection({
  title, text, actionText, target, isExternalTarget,
}) {
  const router = useRouter();

  function handleClick() {
    if (isExternalTarget) {
      window.open(target, 'blank');
    } else {
      router.push(target);
    }
  }

  return (
    <section>
      <SectionHeader title={title} description={text} />

      <footer className={styles.footer}>
        <PrimaryButton
          onClick={() => handleClick()}
          title={actionText}
          Icon={isExternalTarget ? ExternalLink : ArrowRight}
        />
      </footer>
    </section>
  );
}

CtaSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  isExternalTarget: PropTypes.bool,
};

CtaSection.defaultProps = {
  isExternalTarget: false,
};
