package com.example.myapplication;

import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.navigation.Navigation;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

public class own_club extends Fragment {
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View view = inflater.inflate(R.layout.fragment_own_club, container, false);

        view.findViewById(R.id.own_club_memberlist_btn).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Navigation.findNavController(view).navigate(R.id.action_own_club_to_memberlist);
            }
        });

        view.findViewById(R.id.own_club_leaderboard_btn).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Navigation.findNavController(view).navigate(R.id.action_own_club_to_leaderboard);
            }
        });

        view.findViewById(R.id.leave_club_btn).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Navigation.findNavController(view).navigate(R.id.action_own_club_to_myclub);
            }
        });


        //        navbar
        view.findViewById(R.id.friend_ico).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Navigation.findNavController(view).navigate(R.id.action_dashboard_to_friendlist);
            }
        });

        view.findViewById(R.id.club_ico).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Navigation.findNavController(view).navigate(R.id.action_dashboard_to_myclub);
            }
        });
        view.findViewById(R.id.home_ico).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Navigation.findNavController(view).navigate(R.id.action_dashboard_to_dashboard);
            }
        });
        view.findViewById(R.id.scoreboard_ico).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Navigation.findNavController(view).navigate(R.id.action_dashboard_to_create_session);
            }
        });
        view.findViewById(R.id.profile_ico).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Navigation.findNavController(view).navigate(R.id.action_dashboard_to_myprofile);
            }
        });

        return view;
    }
}