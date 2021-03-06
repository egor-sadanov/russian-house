/**
 * volunteer-club.js
 * Created by Egor Sadanov (@sadanov)
 * This component represents volunteer club page.
 */
import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby' 
import { useTranslation } from "gatsby-plugin-react-i18next"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const VolunteerClub = () => {
	const {t} = useTranslation('support')
	const data = useStaticQuery(query)

	return (
		<Container>
			<p className="mt-4 mb-0 text-uppercase"><small>{t('head.support')}</small></p>
			<h3 className="mb-0">{t('titles.volunteering')}</h3>
			<Row>
				<Col lg={8}>
					<Img fluid={data.file.childImageSharp.fluid} className="my-4" alt="Figure 1"/>
					<p>Сообщество волонтеров в Мельбурне приглашает желающих принять участие в проектах русского дома.</p>
					<p>Вы сможете ознакомиться и получить знания, а также поделиться опытом работы вместе с активной частью русских жителей Австралии.</p>
					<p>Вы узнаете, как функционирует русская община, находящаяся так далеко от родной страны, 
						познакомитесь с единомышленниками и примите участие в приходящих проектах.</p>
					<p>Волонтеры Русского Дома работают над всеобщими музыкальными, искусственными и социальными мероприятиями 
						в периодическом соучастии с местной благотворительной организацией “Маленькое Облачко” и русской православной церковью “Покров”.</p>
					<p>Работа будет заключаться в совместной помощи подготовке и организации различной величины мероприятий, связи с общественностью, 
						воплощение креативных идей в коллективных обсуждениях и подготовление русской традиционной еды для продаж при субботнем кафе.</p>
					<p>Разработка проектов подразумевают совместное участие в свободные нерабочие и выходные дни, частично некоторые встречи можно выполнять дистанционно.</p>
					<p>Есть возможность получить официальное подтверждение об волонтерской деятельности для личного резюме.<br />
						Контакт: volunteer@valera.ru</p>
				</Col>
			</Row>
		</Container>
	)
} 

export default VolunteerClub

const query = graphql`
  query VolunteerImg {
    file(relativePath: { eq: "volunteers.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
			}
		}
  }
`