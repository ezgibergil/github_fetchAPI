document.getElementById('searchButton').addEventListener('click', async () => {
    const username = document.getElementById('username').value.trim();
    const profileDiv = document.getElementById('profile');
    const errorMessage = document.getElementById('errorMessage');
    
   
    errorMessage.textContent = '';
    profileDiv.style.display = 'none';

    if (!username) {
        errorMessage.textContent = 'Lütfen geçerli bir kullanıcı adı girin.';
        return;
    }

    try {
        
        const response = await fetch(`https://api.github.com/users/${username}`);

        
        if (!response.ok) {
            throw new Error('Kullanıcı bulunamadı!');
        }

        
        const userData = await response.json();

        
        document.getElementById('avatar').src = userData.avatar_url;
        document.getElementById('name').textContent = userData.name || 'Bilinmiyor';
        document.getElementById('bio').textContent = userData.bio || 'Biyografi bulunmamaktadır.';
        document.getElementById('followers').textContent = userData.followers;

        
        profileDiv.style.display = 'block';

    } catch (error) {
        
        errorMessage.textContent = error.message;
    }
});
