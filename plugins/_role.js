let handler = m => m

handler.before = function (m) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 1) ? 'Newbie'
     : ((user.level >= 1) && (user.level <= 5)) ? 'Newbie'
     : ((user.level >= 6) && (user.level <= 10)) ? 'Novice'
	 : ((user.level >= 11) && (user.level <= 15)) ? 'Advanced Dancer'
	 : ((user.level >= 16) && (user.level <= 20)) ? 'Clubber'
	 : ((user.level >= 21) && (user.level <= 25)) ? 'Junior Dancer'
	 : ((user.level >= 26) && (user.level <= 30)) ? 'Senior Dancer'
	 : ((user.level >= 31) && (user.level <= 35)) ? 'Semi-Pro Dancer'
	 : ((user.level >= 36) && (user.level <= 40)) ? 'Pro Dancer'
	 : ((user.level >= 41) && (user.level <= 45)) ? 'Dance Master'
	 : ((user.level >= 46) && (user.level <= 50)) ? 'King'
	 : ((user.level >= 51) && (user.level <= 55)) ? 'World Star'
	 : ((user.level >= 56) && (user.level <= 60)) ? 'Superstar'
	 : ((user.level >= 61) && (user.level <= 65)) ? 'Audition Master'
	 : ((user.level >= 66) && (user.level <= 70)) ? 'Audition Elite'
	 : ((user.level >= 71) && (user.level <= 75)) ? 'Audition Royale'
	 : ((user.level >= 76) && (user.level <= 80)) ? 'Audition Superstar'
	 : ((user.level >= 81) && (user.level <= 85)) ? 'Audition Superhero'
	 : ((user.level >= 86) && (user.level <= 90)) ? 'Audition Maestro'
	 : ((user.level >= 91) && (user.level <= 95)) ? 'Maestro'
         : ((user.level >= 1000) && (user.level <= 1000)) ? 'Administrator'
         : ((user.level >= 10000) && (user.level <= 10000)) ? 'Kepala Suku Ferengi'
         : 'Kepala Suku Ferengi'
    user.role = role
    return true
}

module.exports = handler
